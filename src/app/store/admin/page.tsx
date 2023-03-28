"use client";
import styles from "./page.module.css";
import { Button } from "@app/components/button/button";
import { TextField } from "@app/components/text-field/text-field";
import { Form } from "@app/components/form/form";
import { authService } from "@app/service/auth";
import { useEffect, useRef, useState } from "react";
import { FormFieldError } from "@app/models/models";
import { useRouter } from "next/navigation";
import { productsService } from "@app/service/products";

const Admin = () => {
  const [image, setImage] = useState<File>();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<string>();
  const formRef = useRef<HTMLFormElement>();

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const onCreateProduct = () => {
    if (name && description && price && image) {
      const parsedPrice = Number.parseFloat(price);
      productsService
        .createProduct({
          name,
          description,
          price: parsedPrice,
          image,
        })
        .then((resp) => {})
        .catch(() => {});
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <Form onSubmit={onCreateProduct} ref={formRef}>
          <h1>Add a product</h1>
          <TextField placeholder="Name" onChange={setName} required />
          <TextField
            placeholder="Description"
            onChange={setDescription}
            required
          />
          <TextField
            placeholder="Price"
            onChange={setPrice}
            required
            type="number"
            step="0.01"
          />
          <br />
          <label>
            Product Image: <br />
            <input
              type="file"
              placeholder="Product image"
              onChange={onChangeImage}
              required
            />
          </label>
          <br />
          <Button type="submit" value={"Add product"} />
        </Form>
      </div>
    </div>
  );
};

export default Admin;
