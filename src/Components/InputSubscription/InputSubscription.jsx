import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Mail } from "@mui/icons-material";
import {  toast } from "react-toastify";

export default function InputSubscription({ buttonPlace }) {
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let email = data.email;
    setData((current) => ({ ...current, status: "loading" }));

    let emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (emailRegex.test(email)) {
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
      toast.success("Thanks for signing up to our email list!", {
        position: "top-right",
        autoClose: 2000,
        delay: 1500,
      });
    } else {
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
      toast.error("Please provide valid email address", {
        position: "top-right",
        autoClose: 2000,
        delay: 1500,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl>
        <FormLabel
          sx={(theme) => ({
            "--FormLabel-color": theme.vars.palette.primary.plainColor,
          })}
        ></FormLabel>
        <Input
          sx={{
            "--Input-decoratorChildHeight": "35px",
            backgroundColor: "#3a3c43",
            overflow: "hidden",
            color: !buttonPlace ? "#b8c0cc" : "white",
            border: "none",
            maxWidth: "400px",
            borderBottom: !buttonPlace
              ? "2px solid #8c99fe"
              : "2px solid white",
            borderRadius: "4px 4px 0 0",
            ":before": {
              boxShadow: "none !important",
            },
          }}
          placeholder="Email address"
          type="email"
          required
          startDecorator={<Mail />}
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: "initial" })
          }
          error={data.status === "failure"}
          endDecorator={
            !buttonPlace && (
              <Button
                variant="solid"
                loading={data.status === "loading"}
                type="submit"
                sx={{
                  backgroundColor: "#b2bbff",
                  color: "#0d0f11",
                  borderRadius: "0px",
                  ":hover": {
                    backgroundColor: "#e0e4fd",
                    color: "#4d578c",
                  },
                }}
              >
                Subscribe
              </Button>
            )
          }
        />
        {buttonPlace && (
          <Button
            variant="solid"
            loading={data.status === "loading"}
            type="submit"
            sx={{
              backgroundColor: "transparent",
              border: "solid 1px white",
              color: "white",
              borderRadius: "5px",
              marginTop: "20px",
              ":hover": {
                backgroundColor: "#e0e4fd",
                color: "#4d578c",
              },
            }}
          >
            Subscribe
          </Button>
        )}
      </FormControl>
    </form>
  );
}
