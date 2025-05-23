import { useState } from "react";
import Select from "react-select";

// 🚗 Grouped car brand options by country
const groupedOptions = [
    {
        label: "🇩🇪 German Cars",
        options: [
            { value: "bmw", label: "BMW" },
            { value: "audi", label: "Audi" },
            { value: "mercedes", label: "Mercedes-Benz" },
            { value: "porsche", label: "Porsche" },
        ],
    },
    {
        label: "🇯🇵 Japanese Cars",
        options: [
            { value: "toyota", label: "Toyota" },
            { value: "honda", label: "Honda" },
            { value: "nissan", label: "Nissan" },
            { value: "mazda", label: "Mazda" },
        ],
    },
    {
        label: "🇺🇸 American Cars",
        options: [
            { value: "ford", label: "Ford" },
            { value: "chevrolet", label: "Chevrolet" },
            { value: "tesla", label: "Tesla" },
            { value: "dodge", label: "Dodge" },
        ],
    },
];

// Tailwind-like styling for react-select
const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "white",
        borderColor: "#d1d5db",
        borderRadius: "0.375rem",
        padding: "0.25rem",
        boxShadow: "none",
        '&:hover': { borderColor: "#9ca3af" },
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "#3b82f6" : "white",
        color: state.isFocused ? "white" : "#111827",
        padding: "0.5rem 1rem",
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: "#e5e7eb",
        borderRadius: "0.25rem",
        padding: "2px 6px",
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: "#111827",
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: "#6b7280",
        ':hover': {
            backgroundColor: "#f87171",
            color: "white",
        },
    }),
};

export default function App() {
    const [selectedCars, setSelectedCars] = useState([]);

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Select Your Favorite Car Brands</h1>
            <Select
                isMulti
                options={groupedOptions}
                value={selectedCars}
                onChange={setSelectedCars}
                placeholder="Search and select car brands..."
                styles={customStyles}
                isSearchable
            />
        </div>
    );
}
