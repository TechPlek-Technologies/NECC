const db = require("_helpers/db");

module.exports = {
  addBranch,
  updateBranch,
  deleteBranch,
  getAllBranches,
};

async function addBranch(branchData) {
  // Extract branch data
  const {
    branch,
    personName,
    state,
    city,
    address1,
    address2,
    phone,
    mobile,
    branchCode,
    gtag,
    country,
    email,
  } = branchData;

  // Check if the branch already exists
  const existingBranch = await db.Branch.findOne({
    where: {
      branch,
      personName,
      state,
      city,
    },
  });

  // If the branch already exists, return an error
  if (existingBranch) {
    throw new Error("Branch already exists");
  }

  // Create the branch
  const newBranch = await db.Branch.create({
    branch,
    personName,
    state,
    city,
    address1,
    address2,
    phone,
    mobile,
    branchCode,
    gtag,
    country,
    email,
  });

  return newBranch;
}

async function getAllBranches() {
  // Find all branches
  const branches = await db.Branch.findAll();

  // If no branches found, throw an error
  if (!branches) {
    throw new Error("No branches found");
  }

  return branches;
}

async function updateBranch(branchId, branchData) {
  // Find the branch by ID
  const branch = await db.Branch.findByPk(branchId);

  // If the branch doesn't exist, throw an error
  if (!branch) {
    throw new Error("Branch not found");
  }

  // Update the branch fields
  const {
    branch: updatedBranch,
    personName,
    state,
    city,
    address1,
    address2,
    phone,
    mobile,
    branchCode,
    gtag,
    country,
    email,
  } = branchData;
  branch.branch = updatedBranch;
  branch.personName = personName;
  branch.state = state;
  branch.city = city;
  branch.address1 = address1;
  branch.address2 = address2;
  branch.phone = phone;
  branch.mobile = mobile;
  branch.branchCode = branchCode;
  branch.gtag = gtag;
  branch.country = country;
  branch.email = email;

  // Save the updated branch
  await branch.save();

  return branch;
}

async function deleteBranch(branchId) {
  // Find the branch by ID
  const branch = await db.Branch.findByPk(branchId);

  // If the branch doesn't exist, throw an error
  if (!branch) {
    throw new Error("Branch not found");
  }

  // Delete the branch
  await branch.destroy();

  return { message: "Branch deleted successfully" };
}
