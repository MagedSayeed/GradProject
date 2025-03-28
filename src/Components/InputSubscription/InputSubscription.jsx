import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Mail } from "@mui/icons-material";
import { Bounce, toast } from "react-toastify";

export default function InputSubscription() {
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
            color: "#b8c0cc",
            border: "none",
            borderBottom: "2px solid #8c99fe",
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
          }
        />
      </FormControl>
    </form>
  );
}
