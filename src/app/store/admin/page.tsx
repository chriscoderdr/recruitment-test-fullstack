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
  const [inProgress, setInProgress] = useState(false);
  const [errors, setErrors] = useState<FormFieldError[]>();

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && !inProgress) {
      setImage(e.target.files[0]);
    }
  };

  const onCreateProduct = () => {
    if (name && description && price && image && !inProgress) {
      setInProgress(true);
      const parsedPrice = Number.parseFloat(price);
      productsService
        .createProduct({
          name,
          description,
          price: parsedPrice,
          image,
        })
        .then((resp) => {
          setInProgress(false);
          if (resp.data) {
            alert("Producto creado satisfactoriamente");
            resetForm();
          } else if (resp.errors) {
            setErrors(resp.errors);
          }
        })
        .catch((e) => {
          setErrors([
            {
              message: e.message,
            } as FormFieldError,
          ]);
        });
    }
  };

  const onFileClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inProgress) {
      e.preventDefault();
    }
  };

  const resetForm = () => {
    setErrors([]);
    formRef.current?.reset();
  };

  return (
    <div className={styles.container}>
      <div>
        <Form
          onSubmit={onCreateProduct}
          ref={formRef}
          errors={errors ? errors : undefined}
        >
          <h1>Add a product</h1>
          {inProgress && <p>Loading....</p>}

          <TextField
            placeholder="Name"
            onChange={setName}
            required
            readOnly={inProgress}
          />
          <TextField
            placeholder="Description"
            onChange={setDescription}
            required
            readOnly={inProgress}
          />
          <TextField
            placeholder="Price"
            onChange={setPrice}
            required
            type="number"
            step="0.01"
            readOnly={inProgress}
          />
          <br />
          <label>
            Product Image: <br />
            <input
              type="file"
              placeholder="Product image"
              onChange={onChangeImage}
              required
              readOnly={inProgress}
              onClick={onFileClick as any}
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
