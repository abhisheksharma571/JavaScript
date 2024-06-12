# DOM Manipulation in JavaScript

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents as a hierarchical tree of nodes, allowing scripts to dynamically access and manipulate the content, structure, and style of web pages.

## Basic Concepts

### Nodes

Nodes are the building blocks of the DOM tree. There are several types of nodes:

- **Element nodes**: Represent HTML elements, such as `<div>`, `<p>`, `<span>`, etc.
- **Text nodes**: Contain textual content within elements.
- **Attribute nodes**: Represent attributes of elements.
- **Comment nodes**: Represent HTML comments.
- **Document nodes**: Represent the entire document.

### Parent, Child, and Sibling Nodes

- **Parent node**: A node that contains other nodes.
- **Child node**: A node contained within another node.
- **Sibling nodes**: Nodes that share the same parent.

### Tree Structure

The DOM is structured as a tree, with the document node at the root. Each element, attribute, text, and comment node is a descendant of the document node, forming a hierarchical structure.

## DOM Manipulation

### Accessing Elements

You can access elements using methods like `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, and `querySelectorAll`.

```javascript
// Get element by ID
const element = document.getElementById("myElement");

// Get elements by class name
const elements = document.getElementsByClassName("myClass");

// Get elements by tag name
const elements = document.getElementsByTagName("div");

// Query selector (selects the first matching element)
const element = document.querySelector("#myElement");

// Query selector all (selects all matching elements)
const elements = document.querySelectorAll(".myClass");
```

### Manipulating Elements

You can manipulate elements by modifying their properties, attributes, and content

```javascript
// Modify text content
element.textContent = "New text";

// Modify HTML content
element.innerHTML = "<b>New HTML</b>";

// Add a CSS class
element.classList.add("newClass");

// Remove a CSS class
element.classList.remove("oldClass");

// Set an attribute
element.setAttribute("data-id", "123");

// Remove an attribute
element.removeAttribute("data-id");
```
### Creating and Removing Elements

You can create new elements and append them to the document.

```javascript
// Create a new element
const newElement = document.createElement("div");

// Append it to the document
document.body.appendChild(newElement);

// Remove an element
document.body.removeChild(newElement);
```

