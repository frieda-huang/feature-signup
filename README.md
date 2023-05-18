## Workflow

- On submitting a Google Form, all fields are automatically converted to an issue with `feature` as a label.
- The issue is then automatically added to the Project `Code&Coffee Feature Signup` and again moved to `Speaker Queue` under the Kanban view

## How does it work?

On the Google Forms

1. Open the Apps Script editor and selecting "Extensions" → "Apps Script".
2. Upload script.js to Files
3. In the Apps Script editor, click on the "Edit" menu and select "Current project's triggers".
4. Click on the "+ Add Trigger" button at the bottom right of the page.
5. Configure the trigger settings:
   - Choose the function you want to trigger from the "Run" dropdown menu.
   - Choose the event that should trigger the function (e.g., "On form submit" for a Google Form).
   - Adjust any additional settings specific to the chosen event.
6. Click the "Save" button to create the trigger.

To add github-project-automation

1. Go to the project [Code&Coffee Feature Signup](https://github.com/users/frieda-huang/projects/8)
2. Click on the "..." at the top right of the page.
3. Click on the "Workflows"
4. Configure `Item added to project` and `Auto-add to project`

## Reference

[Automating GitHub Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically)
