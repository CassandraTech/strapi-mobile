# Strapi Mobile

## Roadmap
1. [x] Figure to pass props to ViewTables.js
2. [x] Run Strapi Query on load from ViewTables.js
     - [ ] If query gives 403, show a message saying that they dont have access to this.
     - [ ] If query gives 404, say Collection not found. Link them to point 7.1.
3. [ ] Make custom Homepage
     - [ ] shows all collection and their types.
     - [ ] Show vendor image
4. [ ] Figure how to make an "About Us" section on clicking corner menubar.
     - [ ] Build a page for yourself.
     - [ ] Leave space for contributors on vendor end.
5. [ ] Change app name from "strapiMobile" to "Strapi Mobile"
6. [ ] If metadata query returns 403 error (Forbidden to Access), make a login page for them.
7. [ ] Build a page for FAQs
     - [ ] Why are old collection details still being shown in my app: Strapi doesnt support yet.
8. [ ] If on app load, Strapi gives 404 error, then ask User if their Strapi Admin has installed the strapi-plugin-mobile on their Strapi instance.
9. [ ] Make a same Error page template for points 2.1, 2.2, 8. 
10. [ ] Make Fancy Splash Screen
11. [ ] Highlight DrawerItem if already selected.
12. [ ] The view for SingleType should be same as view for a CollectionType entry.