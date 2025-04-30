import Button from "@mui/joy/Button";
import React from "react";
import { Bounce, toast } from "react-toastify";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Support() {
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setData((current) => ({ ...current, status: "loading" }));

    let email = data.email;
    let emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (emailRegex.test(email)) {
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
      toast.success("Thanks for Contacting Us!", {
        position: "top-right",
        autoClose: 2000,
        delay: 1500,
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setTimeout(() => {
        setData({ status: "sent" });
      }, 1500);
      toast.error("Please provide valid email address", {
        position: "top-right",
        autoClose: 2000,
        delay: 1500,
      });
    }
  };
  return (
    <div className=" pb-5 myPadding supBg">
      <div className="container grayBg rounded-5 ">
        <div className="row ">
          <div className="col-md-5 SupportBg rounded-start-5"></div>
          <div className="col-md-7 p-5">
            <div className="SupportForm">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl ">
                  Need to contact us?
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="mx-auto mt-3 max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="Name"
                      className="block text-sm/6 font-semibold text-white"
                    >
                      Full Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="Name"
                        name="Name"
                        type="text"
                        placeholder="Ex.Maged Mohamed"
                        required
                        autoComplete="given-name"
                        className="textHover block w-full rounded-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 "
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-semibold text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Ex.magedsayed01@gmail.com"
                        value={data.email}
                        onChange={(e) =>
                          setData({
                            email: e.target.value,
                            number: data.number,
                            status: "initial",
                          })
                        }
                        required
                        autoComplete="email"
                        className="textHover block w-full rounded-md  px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 "
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-semibold text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Leave a comment..."
                        required
                        rows={4}
                        className="textHover block w-full rounded-md  px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 "
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <Button
                    type="submit"
                    loading={data.status == "loading"}
                    sx={{
                      backgroundColor: "#b2bbff",
                      color: "#0d0f11",
                      borderRadius: "0px",
                      ":hover": {
                        backgroundColor: "#e0e4fd",
                      },
                    }}
                    className="rounded  w-full  px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs "
                  >
                    Let's talk
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
