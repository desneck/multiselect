# Rick and Morty Character Selector

This project implements a MultiSelect component in React, specifically designed for selecting characters from the "Rick and Morty" API. The component provides an interactive dropdown list where users can search, select, and view characters from the series, leveraging a dynamic query system that adjusts to user input.

## Features

- **Dynamic Search**: Users can search characters by name, with search results updating as they type.
- **Highlight Matching**: Search terms are highlighted in the search results, enhancing readability.
- **Persistent Selections**: Selected characters are maintained in the view even when the search term is cleared or changed.
- **Mobile Responsive**: Fully functional on both desktop and mobile devices, including touch event handling for mobile users.
- **Error Handling**: Graceful handling of no results or API errors with user-friendly messages.
- **Performance Optimization**: Implements debouncing to limit API requests during rapid typing.

## Technologies Used

- **NextJs/React**: Used for building the user interface.
- **Axios**: Utilized for API requests to fetch character data.
- **TailwindCSS**: Basic styling and layout, with responsiveness in mind.

## Setup and Installation

To get the MultiSelect component running locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
