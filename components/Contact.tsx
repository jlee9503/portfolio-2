import React from "react";
import { AiTwotonePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className="h-screen flex flex-col relative text-left md:flex-row max-w-full justify-evenly overflow-hidden items-center mx-auto">
      <h2 className="text-gray-500 text-xl md:text-2xl uppercase tracking-[18px] mr-[-18px] absolute top-20">
        Contact
      </h2>

      <div className="flex flex-col space-y-8 absolute top-40">
        <h4 className="text-3xl font-semibold text-center decoration-cyan-400/50 underline animate-bounce">
          Let{"'"}s get in touch
        </h4>

        <div className="space-y-8">
          <div className="flex items-center space-x-5">
            <AiTwotonePhone className="text-2xl text-cyan-400/50 animate-pulse" />
            <p>123{")"}456-7890</p>
          </div>
          <div className="flex items-center space-x-5">
            <HiOutlineMail className="text-2xl text-cyan-400/50 animate-pulse" />
            <p>example123@gmail.com</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("firstName", { required: true })}
              type="text"
              className="contactInput"
              placeholder="First Name"
            />
            <input
              {...register("lastName", { required: true })}
              type="text"
              className="contactInput"
              placeholder="Last Name"
            />
          </div>

          <input
            type="email"
            className="contactInput"
            placeholder="Email"
            {...(register("email"), { required: true })}
          />
          <textarea
            className="contactInput"
            placeholder="Message..."
            rows={4}
            {...register("message", { required: true })}
          />
          <button
            type="submit"
            className="bg-cyan-400/50 hover:bg-cyan-400/80 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
