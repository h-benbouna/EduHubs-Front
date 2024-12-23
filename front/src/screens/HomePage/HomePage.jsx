import React from "react";
import { About } from "../../components/About";
import { Frame } from "../../components/Frame";
import { LancezVous } from "../../components/LancezVous";
import { Login } from "../../components/Login";
import { Pricing } from "../../components/Pricing";
import { Resources } from "../../components/Resources";
import { SignUp } from "../../components/SignUp";
import { Text } from "../../components/Text";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div-2">
        <footer className="footer">
          <div className="frame-2">
            <div className="frame-3" />

            <div className="frame-3" />
          </div>
        </footer>

        <div className="body">
          <div className="frame-4">
            <div className="frame-5">
              <div className="left" />

              <div className="right" />
            </div>

            <div className="frame-5">
              <div className="left-2" />

              <div className="right-2" />
            </div>

            <div className="frame-6">
              <div className="left-3" />

              <div className="right-3" />
            </div>
          </div>
        </div>

        <header className="header">
          <div className="overlap-group-2">
            <div className="back">
              <div className="rectangle" />
            </div>

            <div className="up">
              <div className="frame-7">
                <div className="text-wrapper-7">
                  Toute votre gestion scolaire
                </div>

                <Text
                  className="design-component-instance-node"
                  property1="default"
                />
                <div className="text-wrapper-8">,</div>
              </div>

              <p className="p">simplifiée, réunie en un seul endroit.</p>

              <LancezVous
                botton="Lancez-vous"
                className="lancez-vous-instance"
              />
            </div>
          </div>
        </header>

        <div className="nav-bar">
          <div className="overlap">
            <div className="group-wrapper">
              <div className="group">
                <img
                  className="dark-logo"
                  alt="Dark logo"
                  src="/img/darklogo.png"
                />
              </div>
            </div>

            <div className="frame-8">
              <Resources
                className="design-component-instance-node-2"
                divClassName="design-component-instance-node-3"
                icon="/img/icon-8.svg"
                property1="default"
              />
              <About
                className="about-instance"
                divClassName="design-component-instance-node-3"
                icon="/img/icon-8.svg"
                property1="default"
              />
              <Pricing
                className="pricing-instance"
                divClassName="design-component-instance-node-3"
                icon="/img/icon-8.svg"
                property1="default"
              />
              <Login
                className="design-component-instance-node"
                text="Contact"
              />
            </div>
          </div>

          <div className="frame-9">
            <Login className="design-component-instance-node" text="Login" />
            <SignUp
              className="design-component-instance-node-2"
              divClassName="sign-up-2"
              overlapGroupClassName="sign-up-instance"
            />
          </div>
        </div>

        <div className="gradient">
          <div className="frame-wrapper">
            <Frame className="frame-instance" property1="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};
