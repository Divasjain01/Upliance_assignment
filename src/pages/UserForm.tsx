
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { v4 as uuidv4 } from "@/lib/uuid";

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const UserForm = () => {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { isDirty } } = useForm<UserData>();

  useEffect(() => {
    setHasUnsavedChanges(isDirty);
  }, [isDirty]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const onSubmit = (data: UserData) => {
    const userData = { ...data, id: uuidv4() };
    localStorage.setItem("userData", JSON.stringify(userData));
    toast.success("User data saved successfully!");
    setHasUnsavedChanges(false);
    reset(userData);
  };

  return (
    <div className="container py-12">
      <div className="glass-card max-w-2xl mx-auto p-8 rounded-2xl animate-enter">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-mint-100 text-mint-600">
              User Form
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
            <p className="text-gray-500">Please fill in your details below</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  {...register("name", { required: true })}
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  {...register("phone", { required: true })}
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  {...register("address", { required: true })}
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-mint-500 hover:bg-mint-600 text-white rounded-xl px-8"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
