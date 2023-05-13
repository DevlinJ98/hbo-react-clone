import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who Is Watching?</span>
        </div>
        <div className="create-user__form">
          <img
            className="create-user__user-img"
            src="https://randomuser.me/api/portraits/men/16.jpg"
          />
          <div className="create-user__input-group">
            <label>Name</label>
            <input type="text" className="create-user__inputText" />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(97,34,147,1) 100%)",
                }}
              />
              <div
                className="create-user__color create-user__color"
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(34,147,94,1) 100%);",
                }}
              />
              <div
                className="create-user__color create-user__color"
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(163,32,145,1) 100%);",
                }}
              />
              <div
                className="create-user__color create-user__color"
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);",
                }}
              />
              <div
                className="create-user__color create-user__color"
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(35,163,32,1) 100%);",
                }}
              />
            </div>
          </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  );
}
