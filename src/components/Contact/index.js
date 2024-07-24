import React, { useState } from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Button from "../Button";
import { isEmail, isEmpty } from "../../utils";

function Contact() {
  const [inputs, setInputs] = useState({ fullname: "", email: "", message: "" });
  const [errors, setErrors] = useState({ fullname: "", email: "", message: "" });

  const handleFullNameChange = (e) => setInputs((prev) => ({ ...prev, fullname: e.target.value }));

  const handleEmailChange = (e) => setInputs((prev) => ({ ...prev, email: e.target.value }));

  const handleMessageChange = (e) => setInputs((prev) => ({ ...prev, message: e.target.value }));

  const handleFullNameInput = () => setErrors((prev) => ({ ...prev, fullname: "" }));

  const handleEmailInput = () => setErrors((prev) => ({ ...prev, email: "" }));

  const handleMessageInput = () => setErrors((prev) => ({ ...prev, message: "" }));

  const handleFullNameBlur = () => {
    if (isEmpty(inputs.fullname)) {
      setErrors((prev) => ({ ...prev, fullname: "Please provide your full name" }));
    }
  };

  const handleEmailBlur = () => {
    if (!isEmail(inputs.email)) {
      setErrors((prev) => ({ ...prev, email: "Please provide a valid email address" }));
    }
  };

  const handleMessageBlur = () => {
    if (isEmpty(inputs.message)) {
      setErrors((prev) => ({ ...prev, message: "Please enter your message" }));
    }
  };

  const handleSubmit = () => {
    handleFullNameBlur();
    handleEmailBlur();
    handleMessageBlur();
  };

  return (
    <section className="max-w-screen-xl px-5 mx-auto text-center">
      <div>
        <div className="mt-16">
          <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-light">Contact</h1>
          <p className="text-lg text-slate-600 mt-4">We are a here to help.</p>
        </div>

        <div className="grid md:grid-cols-2 grid-flow-row gap-10 max-w-4xl mx-auto text-center mt-16">
          <div className="text-start">
            <h3 className="font-medium text-2xl text-gray-800">Contact Astroship</h3>
            <p className="mt-3 text-lg text-slate-500 leading-relaxed">
              Have something to say? We are here to help. Fill up the form or send email or call phone.
            </p>
            <div className="mt-5">
              <span className="flex items-center gap-2 mt-2 text-gray-600">
                <CiLocationOn />
                <p>1734 Sanfransico, CA 93063</p>
              </span>
              <span className="flex items-center gap-2 mt-2 text-gray-600">
                <CiMail />
                <p>legiacuong789@gmail.com</p>
              </span>
              <span className="flex items-center gap-2 mt-2 text-gray-600">
                <FiPhone />
                <p>+84948800917</p>
              </span>
            </div>
          </div>
          {/* Form */}
          <div className="flex flex-col gapy-6">
            <div className=" mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className={`w-full py-3 px-4 rounded-md border-2 border-gray-300 placeholder:text-gray-800 focus:ring-4 ring-gray-100 ${
                  errors.fullname ? "border-red-600 focus:outline-none" : ""
                }`}
                value={inputs.fullname}
                onChange={handleFullNameChange}
                onBlur={handleFullNameBlur}
                onInput={handleFullNameInput}
              />
              {errors.fullname && (
                <div className="text-red-400 mt-1 font-semibold text-sm text-start">{errors.fullname}</div>
              )}
            </div>

            <div className=" mb-5">
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full py-3 px-4 rounded-md border-2 border-gray-300 placeholder:text-gray-800 focus:ring-4 ring-gray-100 ${
                  errors.email ? "border-red-600 focus:outline-none" : ""
                }`}
                value={inputs.email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                onInput={handleEmailInput}
              />
              {errors.email && <div className="text-red-400 mt-1 font-semibold text-sm text-start">{errors.email}</div>}
            </div>

            <div className=" mb-5">
              <textarea
                placeholder="Your Message"
                className={`w-full py-3 px-4 rounded-md border-2 border-gray-300 placeholder:text-gray-800 focus:ring-4 ring-gray-100 ${
                  errors.message ? "border-red-600 focus:outline-none" : ""
                }`}
                value={inputs.message}
                onChange={handleMessageChange}
                onBlur={handleMessageBlur}
                onInput={handleMessageInput}></textarea>
              {errors.message && (
                <div className="text-red-400 mt-1 font-semibold text-sm text-start">{errors.message}</div>
              )}
            </div>

            <div onClick={handleSubmit}>
              <Button dark widthFull>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
