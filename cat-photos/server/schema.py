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
collection = client['cat']['photos']

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
    records = collection.find({})
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


@strawberry.type
class Mutation:
    @strawberry.mutation
    def like_photo(self, id: str) -> None:
        print(f'Like a photo {id}')
        photo = collection.find_one({"id": id})
        likesCount = photo["likesCount"]
        collection.update_one(
            {'id': id}, {"$set": {"likesCount": likesCount + 1, "meHasLiked": True}}, upsert=False)


schema = strawberry.Schema(query=Query, mutation=Mutation)
# app = GraphQL(schema)

# strawberry server schema
# uvicorn schema:app
# strawberry codegen --schema schema --output-dir ./output -p python -p typescript _query.graphql
