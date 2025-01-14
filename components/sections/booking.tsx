"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GetUTCTimeOf12HourFormat } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios-config";
import toast from "react-hot-toast"

export function BookingSection() {
const router = useRouter()
const [loading, setLoading] = useState<boolean>(false)
const [date, setDate] = useState<Date | undefined>(new Date());

const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  date: Yup.date().required("Preferred date is required").nullable(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  date: date,
};

const handleSubmit = async (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
  try {
    setLoading(true);
    let cus_response = await axiosInstance({
      url: '/customers',
      method: "POST",
      data: {
        name: values.name,
        phone: values.phone,
        email: values.email
      }
    });

    let formData: any = new FormData();

    formData.append('customerId', cus_response.data.id);
    formData.append('customerType', "customer");
    formData.append('date', `${new Date(`${values.date}`).toISOString()}`);
    formData.append('time', GetUTCTimeOf12HourFormat('9:00 AM'));
    formData.append('payments', JSON.stringify([{ amount: 0, paymentMethod: 'cash' }]));
    formData.append('totalPrice', "0");

    let url = '/appointments';
    await axiosInstance({
      url: url,
      method: "POST",
      data: formData
    });

    resetForm();
    setLoading(false);
    toast.success("Your appointment has been scheduled");
  } catch (err: any) {
    toast.error(err.response.data.message);
    setLoading(false);
  }
}  

return (
  <section id="booking" className="py-20 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-pacifico text-4xl mb-4">Schedule a Appointment</h2>
      </motion.div>

      <Card className="max-w-2xl mx-auto p-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, touched, errors }) => (
            <Form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Field
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    as={Input}
                    className="input"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    as={Input}
                    className="input"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Field
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  as={Input}
                  className="input"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label>Preferred Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    setFieldValue("date", selectedDate);
                  }}
                  className="rounded-md border"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
                disabled={loading}
              >
                Schedule Appointment
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  </section>
);
}