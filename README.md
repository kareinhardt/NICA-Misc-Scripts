# NICA-Misc-Scripts
A collection of miscellaneous scripts used for various tasks related to NICA.

## 📂 File Structure
📦 NICA-Misc-Scripts
| File | Description |
|-----------------|-------------|
| 📄 SurnameAutoFill.js |  The script file |
| 📄 README.md |  This documentation file|

# SurnameAutoFillBot

## Description
**SurnameAutoFillBot** is a script that automates the process of filling in the “Last Name” field on a webpage using a predefined list of 100 common German surnames. It was used to test the **Voice® suspicious user activity backend** by simulating frequent name changes. The script cycles through the surnames every **15 seconds**, mimicking user activity by updating and submitting the form.

## 📜 Documentation

### 🛠 Functionality
- Automatically selects and fills the **"Last Name"** input field with a different surname from a predefined list.
- Uses the **native JavaScript setter** to ensure changes are recognized by frontend frameworks like React or Vue.
- Simulates **user input events** (`input` and `change`) to trigger any associated UI updates.
- Clicks the **"Update Profile"** button (if found) to submit the form.
- Logs **success and failure messages** to the console for debugging.
- Runs every **15 seconds**, continuously cycling through the surname list.

### 🎯 Elements Targeted
| Element Selector | Description |
|-----------------|-------------|
| `#last_name` | Input field where the surname is entered. |
| `button[type="submit"].bg-gray-900` | Submit button (assumed styling for identification). |

### 🔄 How It Works
1. **Finds** the "Last Name" input field and checks if it exists.
2. **Fills** it with a surname from the predefined list.
3. **Triggers events** to ensure the UI registers the change.
4. **Finds and clicks** the submit button (if available).
5. **Logs activity** to the console for tracking.
6. **Repeats the process** every **15 seconds**, iterating through the surname list.



## 🚀 Usage
1. **Copy and paste** the contents of `SurnameAutoFill.js` into your browser console or inject it into a test environment.
2. The script will **automatically execute** every 15 seconds.
3. Monitor the **console logs** for updates and debugging.

---

📌 **Disclaimer:** This script was developed for **testing purposes** only. Ensure you have permission before running it in any production environment.
