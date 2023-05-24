// import Prompt from "@models/prompt";
// import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 2, name: "Bob" },
  ];

  return new Response(JSON.stringify(users));
  // try {
  //     await connectToDB()

  //     const prompt = await Prompt.findById(params.id).populate("creator")
  //     if (!prompt) return new Response("Prompt Not Found", { status: 404 });

  //     return new Response(JSON.stringify(prompt), { status: 200 })

  // } catch (error) {
  //     return new Response("Internal Server Error", { status: 500 });
  // }
};
