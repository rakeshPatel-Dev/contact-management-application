import { useForm } from "react-hook-form";
import { ArrowLeft, Send } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      priority: "medium",
    },
  });
  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3000/api/contacts", data);
      toast.success("Contact added successfully");
      reset();
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

  return (
    <main className=" bg-neutral-950 text-neutral-200 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg space-y-4">

        {/* Back Button */}
        <button className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Contact Entry
          </h1>
          <p className="text-neutral-400 text-sm">
            Add or update contact details
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="John Doe"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-neutral-600"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <input
              {...register("imageURL", { required: "Image URL is required" })}
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-neutral-600"
            />
            {errors.imageURL && (
              <p className="text-red-400 text-xs mt-1">
                {errors.imageURL.message}
              </p>
            )}
          </div>

          {/* Email + phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="john.doe@example"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-neutral-600"
            />

            <input
              {...register("phone")}
              type="tel"
              placeholder="1234567890"
              className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-neutral-600"
            />

          </div>
          {/* Priority */}
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
              Priority
            </p>

            <div className="flex gap-4">
              {["low", "medium", "high"].map((level) => (
                <label
                  key={level}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
                  <input
                    {...register("priority")}
                    type="radio"
                    value={level}
                    className="accent-neutral-400"
                  />
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <textarea
            {...register("message")}
            rows={2}
            placeholder="I am interested in this product..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-neutral-600 resize-none"
          />

          {/* Buttons */}
          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-neutral-800 hover:bg-neutral-700 transition rounded-lg py-3 cursor-pointer flex items-center justify-center gap-2 font-medium"
            >
              Save Contact
              <Send size={16} />
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="text-sm cursor-pointer text-neutral-400 hover:text-white transition"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ContactForm;
