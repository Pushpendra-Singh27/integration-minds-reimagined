import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
}

const ContactModal = ({ isOpen, onClose, courseName }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    companyEmail: "",
    phone: "",
    country: "",
    attendees: "",
    message: "",
    pricingCertification: false,
    noPricingCertification: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked,
        // If one checkbox is checked, uncheck the other
        ...(name === "pricingCertification" && checked ? { noPricingCertification: false } : {}),
        ...(name === "noPricingCertification" && checked ? { pricingCertification: false } : {}),
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-black text-white border-gray-700">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-3xl font-bold text-white">
            Contact Us
          </DialogTitle>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-2"></div>
          <p className="text-primary text-lg mt-4">
            We are here for questions or consulting
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name and Company Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-white">
                Full Name *
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-medium text-white">
                Company Name *
              </label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
              />
            </div>
          </div>

          {/* Email and Company Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="companyEmail" className="text-sm font-medium text-white">
                Company Email *
              </label>
              <Input
                id="companyEmail"
                name="companyEmail"
                type="email"
                value={formData.companyEmail}
                onChange={handleInputChange}
                required
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
              />
            </div>
          </div>

          {/* Phone and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-white">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="Add your name"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-medium text-white">
                Country
              </label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
              />
            </div>
          </div>

          {/* Number of Attendees and Course Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="attendees" className="text-sm font-medium text-white">
                Number of Attendees
              </label>
              <select
                id="attendees"
                name="attendees"
                value={formData.attendees}
                onChange={handleInputChange}
                className="w-full h-11 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-sm text-white focus:border-primary"
              >
                <option value="" className="bg-black">Choose an option</option>
                <option value="1-5" className="bg-black">1-5 people</option>
                <option value="6-10" className="bg-black">6-10 people</option>
                <option value="11-15" className="bg-black">11-15 people</option>
                <option value="16-20" className="bg-black">16-20 people</option>
                <option value="20+" className="bg-black">20+ people</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="courseName" className="text-sm font-medium text-white">
                Course Name
              </label>
              <Input
                id="courseName"
                name="courseName"
                value={courseName || ""}
                readOnly
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex items-center space-x-2 text-sm text-white">
              <input
                type="checkbox"
                name="pricingCertification"
                checked={formData.pricingCertification}
                onChange={handleInputChange}
                className="w-4 h-4 text-primary bg-transparent border-gray-600 rounded focus:ring-primary"
              />
              <span>Yes, I do require Pricing for Certification Exam.</span>
            </label>
            <label className="flex items-center space-x-2 text-sm text-white">
              <input
                type="checkbox"
                name="noPricingCertification"
                checked={formData.noPricingCertification}
                onChange={handleInputChange}
                className="w-4 h-4 text-primary bg-transparent border-gray-600 rounded focus:ring-primary"
              />
              <span>No, I do not require Pricing for Certification Exam.</span>
            </label>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white">
              Leave us a message...
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-primary resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
