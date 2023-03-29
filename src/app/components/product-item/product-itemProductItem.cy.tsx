import { Product } from "@prisma/client";
import React from "react";
import { ProductItem } from "./product-item";

describe("<ProductItem />", () => {
  const longDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel neque laoreet eros fermentum dictum nec et arcu. Vestibulum in eros convallis, condimentum massa sed, consequat neque. Etiam tellus lacus, dictum a sapien et, facilisis ultrices augue. Suspendisse vel fermentum enim. Vestibulum sagittis laoreet diam sit amet lobortis. Suspendisse scelerisque odio in tortor ultrices accumsan. Sed vitae hendrerit massa. Donec sem odio, bibendum sit amet nibh vitae, tempus fermentum leo. Sed pulvinar tortor sit amet risus rutrum, nec laoreet turpis suscipit. Aliquam a orci ultrices, laoreet orci in, interdum odio.

Aliquam aliquam, ligula et accumsan dictum, est urna pharetra nisi, ac pretium erat mi nec mi. Fusce faucibus mauris vitae lectus gravida, ut faucibus nisi suscipit. Nunc eleifend magna sapien, auctor tempus nunc vestibulum nec. Aenean vel lacus sapien. Proin malesuada odio dui, quis eleifend ex fermentum a. Nullam ut neque maximus, eleifend diam in, lobortis erat. Duis eget finibus turpis. Etiam ornare sem sollicitudin posuere vehicula. Quisque porta sapien sed nisi cursus dignissim. Suspendisse ullamcorper eros quis dolor rutrum rutrum.

Proin varius porttitor nunc ac dictum. Vestibulum massa augue, posuere non nulla non, egestas aliquam metus. Sed luctus mi at malesuada bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce neque turpis, condimentum id aliquet tristique, tincidunt et eros. Etiam finibus orci magna. Donec eu facilisis nisl. Mauris eleifend ante et tellus venenatis ornare. Nam id elit non ex laoreet elementum. Proin id auctor ligula. Nam lorem arcu, consequat eu lacus blandit, tempus.`;
  const testItem = {
    name: "Test Product",
    price: 250.9 as any,
    authorId: 1,
    id: 1,
    image: "https://placehold.it/200x200",
    description: longDescription,
  } as Product;
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductItem product={testItem} />);
  });
});
