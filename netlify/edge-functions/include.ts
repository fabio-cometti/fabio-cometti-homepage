import { Context } from 'https://edge.netlify.com';

export default async (request: Request, context: Context) => {

  // Just return what was requested without transforming it,
  // unless we fnd the query parameter for this demo
  const url = new URL(request.url);

  const nonce = '' + Math.floor(Math.random() * 1000000000);

  // Get the page content
  const response = await context.next();
  const page = await response.text();

  // Search for the placeholder
  const regex = /999999999/gi;

  //Replace Header
  const csp = response.headers.get('Content-Security-Policy');
  if(csp)
  {
    const updatedCsp = csp.replace(regex, nonce);
    response.headers.set('Content-Security-Policy', updatedCsp);
  }

  // Replace the content
  const updatedPage = page.replace(regex, nonce);

  return new Response(updatedPage, response);

};