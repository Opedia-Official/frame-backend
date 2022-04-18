import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleBlog from "../components/SingleBlog";
import SingleProduct from "../components/SingleProduct";
import YouTube from "../components/skletor";
import ButtonStock from "../utils/ButtonStock";
import { blogdata } from "../utils/fakedata";

function Blog() {
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);

  const loadmorehandler = () => {
    setLoaderSpin(true);
    setTimeout(() => {
      setLoaderSpin(false);
      setTotlaProduct(totlaProduct + 4);
    }, 1000);
  };
  useEffect(() => {}, []);
  return (
    <div className="productsection">
      <div className="wrapper">
        <Grid container>
          {blogdata.slice(0, totlaProduct).map((item) => (
            <Grid item xl={4} lg={4} sm={6} xs={12}>
              <SingleBlog item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Blog;
