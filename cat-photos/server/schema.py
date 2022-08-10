import typing
from typing import List, Union, Any, Optional, NewType
import strawberry

import strawberry.asgi as gqla
import starlette.requests as strq
import starlette.responses as strp
from strawberry.types import Info
from strawberry.dataloader import DataLoader
from starlette.websockets import WebSocket
from strawberry.scalars import JSON
import json


JSON = strawberry.scalar(
    NewType("JSON", object),
    description="The `JSON` scalar type represents JSON values as specified by ECMA-404",
    serialize=lambda v: v,
    parse_value=lambda v: v,
)

image_path = "images/"
with open("../data/photos_dict.json", "r") as f:
    data = json.load(f)


@ strawberry.type
class Photo:
    id: str
    text: str
    image: str
    meHasLiked: bool
    likesCount: int

    @classmethod
    def marshal(cls, d) -> "Photo":
        return cls(id=strawberry.ID(str(d["id"])), text=d["text"], image=d["image"], meHasLiked=d["meHasLiked"], likesCount=d["likesCount"])


async def load_photos(keys) -> List[Photo]:
    def lookup(key: int) -> Union[Photo, ValueError]:
        user = Photo.marshal(data.get(key))
        if user:
            return user
        return ValueError("not found")
    return [lookup(key) for key in keys]


async def get_photos():
    return [Photo.marshal(v) for d, v in data.items()]


class GraphQL(gqla.GraphQL):
    async def get_context(self, request: Union[strq.Request, WebSocket], response: Optional[strp.Response]) -> Any:
        return {
            "photo_loader": DataLoader(load_fn=load_photos)
        }


@ strawberry.type
class Query:
    # @strawberry.field
    # def photos(self, info: Info) -> JSON:
    #     return {"results": data}

    photos: typing.List[Photo] = strawberry.field(resolver=get_photos)

    @ strawberry.field
    async def photo(self, info: Info, id: strawberry.ID) -> Photo:
        return await info.context["photo_loader"].load(id)


schema = strawberry.Schema(query=Query)
app = GraphQL(schema)

# strawberry server schema
# uvicorn schema:app
