function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}


//example of the createUserProfiles code usage
const names = ["samuel", "mubarak", "adam"];
const modifiedNames = ["samuel", "MUBARAK", "ADAM"]; // these are processed names from task two
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);