const basicNeedsData = [
    {
        name: "Basic Needs",
        subcategories: [
            {
                name: "Food",
                subcategories: [
                    {
                        name: "Emergency Food",
                        subcategories: [
                            "Brown Bag Food Programs",
                            "Commodity Supplemental Food Program",
                            "Food Pantries",
                            "Food Vouchers",
                            "Packed Lunches/Dinner",
                            "Specialty Food Providers",
                            "Dietary Supplements",
                            "Formula/Baby Food",
                            "Liquid Nutrition Supplements"
                        ]
                    },
                    {
                        name: "Emergency Food Clearing Houses"
                    },
                    {
                        name: "Food Collection and Storage",
                        subcategories: [
                            "Food Banks/Food Distribution Warehouses"
                        ]
                    },
                    {
                        name: "Food Outlets",
                        subcategories: [
                            "Farmers Market",
                            "Farmers Market Accepting Nutrition Program Vouchers",
                            "Food Cooperatives",
                            "Grocery Ordering/Delivery",
                            "Markets/Restaurants Accepting EBT Cards",
                            "Mobile Markets"
                        ]
                    },
                    {
                        name: "Food Production",
                        subcategories: [
                            "Food Production Support Services",
                            "Community Gardening"
                        ]
                    },
                    {
                        name: "Meals",
                        subcategories: [
                            "After School Meal Programs",
                            "Community Meals",
                            "Congregate Meals/Nutrition Sites",
                            "Soup Kitchens",
                            "Home Delivered Meals",
                            "Summer Food Service Programs"
                        ]
                    }
                ]
            },
            {
                name: "Housing/Shelter",
                subcategories: [
                    {
                        name: "At Risk/Homeless Housing Related Assistance Programs",
                        subcategories: [
                            "Housing Related Coordinated Entry",
                            "Homelessness Prevention Programs"
                        ]
                    },
                    {
                        name: "Emergency Shelter",
                        subcategories: [
                            "Homeless Shelter",
                            "Crisis Shelter",
                            {
                                name: "Home Improvement/Accessibility",
                                subcategories: [
                                    "Energy/Water Conservation Improvements",
                                    "Weatherization Programs"
                                ]
                            },
                            {
                                name: "Home Barrier Evaluation/Removal Services",
                                subcategories: [
                                    "Ramp Construction Services",
                                    "Undesignated Home Barrier Removal Services"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

function createChecklist(data, parentElement) {
    data.forEach(item => {
        const listItem = document.createElement("li");

        if (item.name) {
            const label = document.createElement("label");
            label.className = "collapsible";
            label.textContent = item.name;
            listItem.appendChild(label);
        }

        if (item.subcategories) {
            const subcategoryList = document.createElement("ul");
            subcategoryList.className = "nested";
            createChecklist(item.subcategories, subcategoryList);
            listItem.appendChild(subcategoryList);
        }

        parentElement.appendChild(listItem);
    });
}

const checklistContainer = document.getElementById("checkboxes");
createChecklist(basicNeedsData, checklistContainer);

// Add event listeners to toggle the subcategories
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(collapsible => {
    collapsible.addEventListener("click", function () {
        this.classList.toggle("active");
        const nestedList = this.nextElementSibling;
        if (nestedList.style.display === "block") {
            nestedList.style.display = "none";
        } else {
            nestedList.style.display = "block";
        }
    });
});
