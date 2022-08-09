from pydoc import resolve
import typing
import strawberry

image_path = "./images"


def parser(sentence):
    res = []
    words = sentence.split(" ")
    for word in words:
        res.append(word.lower())
    return "_".join(res)


@strawberry.type
class Post:
    id: strawberry.ID
    text: str
    image: str


@strawberry.type
class Author:
    name: str


def get_posts(root):
    return [Post(id=strawberry.ID("1"), text="A Lazy Afternoon", image=f"{image_path}/a_lazy_afternoon.jpg"),
            Post(id=strawberry.ID("2"), text="Cat Loaf",
                 image=f"{image_path}/cat_loaf.jpg"),
            Post(id=strawberry.ID("3"), text="Meow", image=f"{image_path}/meow.jpg")]


@strawberry.type
class Query:
    post: typing.List[Post] = strawberry.field(resolver=get_posts)


schema = strawberry.Schema(query=Query)
