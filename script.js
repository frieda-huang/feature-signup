function onFormSubmit(e) {
  try {
    var response = e.response;
    var itemResponses = response.getItemResponses();

    var name = getFieldResponse(itemResponses, 0);
    var bestWayToReachOut = getFieldResponse(itemResponses, 1);
    var featureTitle = getFieldResponse(itemResponses, 2);
    var featureDescription = getOptionalFieldResponse(itemResponses, 3);
    var featureLength = getOptionalFieldResponse(itemResponses, 4);
    var needHelpCrafting = getOptionalFieldResponse(itemResponses, 5);

    // Validate required fields
    if (name === "" || bestWayToReachOut === "" || featureTitle === "") {
      throw new Error("Required field(s) are empty.");
    }

    // Create the GitHub issue
    var issueTitle = featureTitle;
    var issueLabels = ["feature"];
    var issueBody = `**Name**
    ${name}

**The Best Way to Reach Out to You**
${bestWayToReachOut}

**Feature Title**
${featureTitle}`;

    if (featureDescription !== "") {
      issueBody += `

**Feature Description**
${featureDescription}`;
    }

    if (featureLength !== "") {
      issueBody += `

**Feature Length**
${featureLength}`;
    }

    if (needHelpCrafting !== "") {
      issueBody += `

**Do You Need Help Crafting Your Talk?**
${needHelpCrafting}`;
    }
    var payload = {
      title: issueTitle,
      body: issueBody,
      labels: issueLabels,
      project: "feature",
      // "assignee": issueAssignee
    };

    var headers = {
      Authorization: "Bearer " + PropertiesService.getScriptProperties().getProperty("GITHUB_API_KEY"),
      "Content-Type": "application/json",
    };

    var response = UrlFetchApp.fetch("https://api.github.com/repos/frieda-huang/feature-signup/issues", {
      method: "POST",
      headers: headers,
      payload: JSON.stringify(payload),
    });
  } catch (error) {
    Logger.log("Error: " + error.message);
    // Handle the error appropriately (e.g., send an email notification, log an error, etc.)
  }
}

function getFieldResponse(itemResponses, index) {
  if (index >= 0 && index < itemResponses.length) {
    return itemResponses[index].getResponse();
  }
  return "";
}

function getOptionalFieldResponse(itemResponses, index) {
  if (index >= 0 && index < itemResponses.length) {
    var response = itemResponses[index].getResponse();
    if (response !== "") {
      return response;
    }
  }
  return "";
}
