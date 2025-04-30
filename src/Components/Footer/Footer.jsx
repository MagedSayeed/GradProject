import { TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import InputSubscription from "../InputSubscription/InputSubscription";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function Footer() {
  return (
    <>
      <div className="footer text-white">
        <div className="container">
          <div className="description-social row">
            <div className="col-md-9">
              <img src={logo} className="myIcon" alt="GameZone logo" />
              <div className="details">
                <h6 className="title">JOIN THE NEWSLETTER</h6>
                <p className="content">
                  The latest news, events from GameZone Games, straight to your
                  inbox.
                </p>
              </div>
              <div className="mb-2">
              <InputSubscription/>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-end">
              <SocialIcons myColor='newIconColor'/>
            </div>
          </div>
          <hr className="my-10 border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">© Copyright 2025. All Rights Reserved.</p>

            <div className="flex  sm:mt-0 gap-3">
                <p className="text-sm text-gray-500 cursor-pointer">Teams</p>
                <p className="text-sm text-gray-500 cursor-pointer" >Privacy</p>
                <p className="text-sm text-gray-500 cursor-pointer">Cookies</p>
            </div>
        </div>
        </div>
        
      </div>
    </>
  );
}
