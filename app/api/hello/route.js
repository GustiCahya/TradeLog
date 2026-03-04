function createResponse(message) {
 return new Response(message, {
   status: 200,
   headers: {
     "Content-Type": "text/plain",
   },
 });
}

export async function GET() {
 return createResponse("Hello World GET");
}

export async function POST() {
 return createResponse("Hello World POST");
}

export async function DELETE() {
 return createResponse("Hello World DELETE");
}

export async function PATCH() {
 return createResponse("Hello World PATCH");
}

export async function PUT() {
 return createResponse("Hello World PUT");
}