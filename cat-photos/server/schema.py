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
import pymongo

client = pymongo.MongoClient(
            host="localhost",
            port=27015,
            tz_aware=True
            )

# JSON = strawberry.scalar(
#     NewType("JSON", object),
#     description="The `JSON` scalar type represents JSON values as specified by ECMA-404",
#     serialize=lambda v: v,
#     parse_value=lambda v: v,
# )

# image_path = "images/"
# with open("../data/photos.json", "r") as f:
#     data = json.load(f)


@strawberry.type
class Photo:
    id: str
    text: str
    image: str
    meHasLiked: bool
    likesCount: int

    @classmethod
    def marshal(cls, d) -> "Photo":
        return cls(id=strawberry.ID(str(d["id"])), text=d["text"], image=d["image"], meHasLiked=d["meHasLiked"], likesCount=d["likesCount"])


async def get_photos():
    records = client['cat']['photos'].find({})
    records = list(records)
    return [Photo.marshal(r) for r in records]


# async def load_photos(keys) -> List[Photo]:
#     def lookup(key: int) -> Union[Photo, ValueError]:
#         for d in data:
#             if d['id'] == key:
#                 user = Photo.marshal(d)
#                 if user:
#                     return user
#         return ValueError("not found")
#     return [lookup(key) for key in keys]


# class GraphQL(gqla.GraphQL):
#     async def get_context(self, request: Union[strq.Request, WebSocket], response: Optional[strp.Response]) -> Any:
#         return {
#             "photo_loader": DataLoader(load_fn=load_photos)
#         }


@strawberry.type
class Query:
    photos: typing.List[Photo] = strawberry.field(resolver=get_photos)

    # @strawberry.field
    # async def photo(self, info: Info, id: strawberry.ID) -> Photo:
    #     return await info.context["photo_loader"].load(id)


schema = strawberry.Schema(query=Query)
# app = GraphQL(schema)

# strawberry server schema
# uvicorn schema:app
# strawberry codegen --schema schema --output-dir ./output -p python -p typescript _query.graphql
