"use strict";
//Create a numeric or string enum named UserRole with members: Admin, Editor, and Viewer.
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
let userRole = UserRole.Admin;
console.log("User Role: ", userRole);
function canEdit(role) {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        console.log("User can edit");
    }
    else {
        console.log("User cannot edit");
    }
}
canEdit(userRole);
//# sourceMappingURL=Enums.js.map