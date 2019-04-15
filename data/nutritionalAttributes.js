
export const nutritionalAttributes = [
    {
        "Nutrition value to pass to the API": "K",
        "Description": "Potassium, K",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "NA",
        "Description": "Sodium, Na",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "CHOLE",
        "Description": "Cholesterol",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "FATRN",
        "Description": "Fatty acids, total trans",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "FASAT",
        "Description": "Fatty acids, total saturated",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "CHOCDF",
        "Description": "Carbohydrate, by difference",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "FIBTG",
        "Description": "Fiber, total dietary",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "PROCNT",
        "Description": "Protein",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "VITC",
        "Description": "Vitamin C, total ascorbic acid",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "CA",
        "Description": "Calcium, Ca",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "FE",
        "Description": "Iron, Fe",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "SUGAR",
        "Description": "SUGAR",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "ENERC_KCAL",
        "Description": "Energy",
        "Implied Units": "kcal"
    },
    {
        "Nutrition value to pass to the API": "FAT",
        "Description": "Total lipid (fat)",
        "Implied Units": "gram"
    },
    {
        "Nutrition value to pass to the API": "VITA_IU",
        "Description": "Vitamin A, IU",
        "Implied Units": "IU"
    },
]




export const Types = [
    {
        "Field": "q",
        "Type": "string	Query text",
        "Description": "as submitted"
    },
    {
        "Field": "from",
        "Type": "integer	First result index",
        "Description": "as submitted"
    },
    {
        "Field": "to",
        "Type": "integer	Last result index",
        "Description": "as submitted"
    },
    {
        "Field": "params",
        "Type": "String[][]",
        "Description": "Effective parameters"
    },
    {
        "Field": "count",
        "Type": "integer",
        "Description": "Number of results found"
    },
    {
        "Field": "more",
        "Type": "boolean",
        "Description": "More that the maximum allowed number of results found"
    },
    {
        "Field": "hits",
        "Type": "Hit[]",
        "Description": "Matching results (Hit objects)"
    },


    {
        "Field": "uri",
        "Type": "string",
        "Description": "Ontology identifier"
    },
    {
        "Field": "label",
        "Type": "string",
        "Description": "Recipe title"
    },
    {
        "Field": "image",
        "Type": "string",
        "Description": "Image URL"
    },
    {
        "Field": "source",
        "Type": "string",
        "Description": "Source site identifier"
    },
    {
        "Field": "url",
        "Type": "string",
        "Description": "Original recipe URL"
    },
    {
        "Field": "yield",
        "Type": "integer",
        "Description": "Number of servings"
    },
    {
        "Field": "level",
        "Type": "enum",
        "Description": "Difficulty level"
    },
    {
        "Field": "calories",
        "Type": "float",
        "Description": "Total energy, kcal"
    },
    {
        "Field": "totalWeight",
        "Type": "float",
        "Description": "Total weight, g"
    },
    {
        "Field": "ingredients",
        "Type": "Ingredient[]",
        "Description": "Ingredients list"
    },
    {
        "Field": "totalNutrients",
        "Type": "NutrientInfo[]",
        "Description": "Total nutrients per serving"
    },
    {
        "Field": "totalDaily",
        "Type": "NutrientInfo[]",
        "Description": "% daily value per serving"
    },
    {
        "Field": "dietLabels",
        "Type": "enum[]",
        "Description": { "diet lables": "“balanced”, “high-protein”, “high-fiber”, “low-fat”, “low-carb”, “low-sodium”" }
    },
    {
        "Field": "healthLabels",
        "Type": "enum[]",
        "Description": { "“vegan”, “vegetarian”, “paleo”, “dairy-free”, “gluten-free”, “wheat-free”, “fat-free”, “low-sugar”, “egg-free”, “peanut-free”, “tree-nut-free”, “soy-free”, “fish-free”, “shellfish-free”"}
    },

]
