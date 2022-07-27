import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../../navbar/Navbar";
import img1 from "../../../images/img1.jpg";
import ecommerce from "../../../images/e-commerce.jpg";
import blog from "../../../images/blog.jpg";
import img3 from "../../../images/img3.jpg";
import List from "./list.js";
import "./portfolios.css";

export default function Portfolios() {
  return (
    <div>
      <div className="main___containerOne">
        <figure className="secondary__container">
          <img src={img1} alt="" style={{ height: "22.5em", width: "20em" }} />
          <figcaption>
            <h5> Project Tracker(Sample)</h5>

            <a href=""></a>
          </figcaption>
        </figure>
        <figure className="secondary__container">
          <img
            src={ecommerce}
            alt=""
            style={{ height: "22.5em", width: "20em" }}
          />
          <figcaption>
            <h5>Ecommerce Website</h5>
            <a href=""></a>
          </figcaption>
        </figure>
        <figure className="secondary__container">
          <img src={blog} alt="" style={{ height: "22.5em", width: "20em" }} />
          <figcaption>
            <h5>Blog Website</h5>

            <a href="https://ejs-blog-website-113.herokuapp.com/"></a>
          </figcaption>
        </figure>
      </div>
      <div className="main___containerTwo">
        <List
          react="React js"
          mongodb="MondoDb"
          html="Html"
          css="Css"
          javascript="Javascript"
          aws="Amazon Web Service"
        />
        <List
          bootstrap="Bootstrap"
          ajax="Ajax"
          jquery="jQuery"
          express="Express"
          node="Node"
          git="Github"
        />
        <List
          rest="Rest Api"
          mongoose="Mongoose"
          redux="Redux"
          googleSignIn="Google Login/Signup"
          json="Json"
          problemsolving="Problem solving"
        />
      </div>
    </div>
  );
}
