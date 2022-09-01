import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState<JSX.Element>();

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEscapeKey(handleCloseDialog);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      userName: {value: string} 
      from: {value: string}
      text: {value: string}
    }

    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail?", {
        method: "POST",
        body: JSON.stringify({
          userName: target.userName.value,
          from: target.from.value,
          text: target.text.value,
        }),
      });
      if (response.ok) {
        setDialogTitle("Success!");
        setDialogContent(
          <p>
            Thanks for contacting me.
            <br /> I'll get back to you as soon as possible.{" "}
          </p>
        );
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("here");
      setDialogTitle(":( Something went Wrong.");
      setDialogContent(
        <div className="space-y-sm">
          <p>
            I'll fix this soon. In the meantime you can try sending me a email
            to:
            <a
              className="underline decoration-primary"
              href="mailto:piekarzmijail@gmail.com?"
            >
              piekarzmijail@gmail.com
            </a>
          </p>
        </div>
      );
    }
    setLoading(false);
    setOpenDialog(true);
  };

  return (
    <>
      <section id="contact" className="scroll-mt-24">
        <h2 className="mb-lg text-center">Get In Touch!</h2>
        <form
          onSubmit={sendEmail}
          className="grid lg:grid-cols-2 gap-md lg:gap-lg"
        >
          <div className="flex flex-col gap-md lg:justify-between">
            <label className="block">
              Name
              <input
                required
                type="text"
                id="userName"
                name="userName"
                className="w-full rounded mt-sm p-sm bg-gray-700"
              />
            </label>
            <label className="block">
              Email
              <input
                required
                type="email"
                id="from"
                name="from"
                className="w-full rounded mt-sm p-sm bg-gray-700"
              />
            </label>
          </div>
          <label className="flex flex-col">
            Message
            <textarea
              required
              id="text"
              name="text"
              className="w-full h-full min-h-[256px] mt-sm rounded p-sm bg-gray-700"
            />
          </label>
          <button
            disabled={loading && true}
            className="lg:col-start-2 justify-self-end rounded bg-secondary hover:bg-secondary-light w-40 p-sm disabled:bg-gray-700 disabled:cursor-not-allowed"
          >
            {loading ? "SENDING..." : "SEND"}
          </button>
        </form>
      </section>

      {openDialog && (
        <div
          onClick={handleCloseDialog}
          className="fixed flex flex-col items-center justify-center inset-0 bg-gray-600 bg-opacity-40 overflow-y-auto h-full w-full !mt-0"
        >
          <div className="relative p-md flex flex-col mx-sm shadow-2xl rounded-md bg-white text-black text-center space-y-sm">
            <span
              onClick={handleCloseDialog}
              className="self-end cursor-pointer absolute top-4 right-4"
            >
              <AiOutlineClose size="21" />
            </span>
            <span className="text-display-9 md:text-display-8 !mt-0">{dialogTitle}</span>
            {dialogContent}
          </div>
        </div>
      )}
    </>
  );
};
