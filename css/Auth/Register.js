import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, input } from "react-bootstrap";
import "./style.css";

const Signup = () => {
  return (
    <Container
    className="container"
    >
      <h3 align="center">Авторизация</h3>

      <Form className="form">
        
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Почта"
          />
          <small id="emailHelp" class="form-text text-muted">
            Мы никогда никому не передадим вашу электронную почту.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Пароль"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Повторите пароль</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Пароль"
          />
        </div>

        <Button type="submit" class="btn btn-dark" >
          Отправить
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
