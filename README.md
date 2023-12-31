# Keepable-js

[![Netlify Status](https://api.netlify.com/api/v1/badges/a5259c3f-50fd-4101-bd25-4da7bed018e3/deploy-status)](https://app.netlify.com/sites/keapeable-diegogomezcuadross/deploys)

Keepable is a take-nothing service and productivity app designed by Codeable students in which users can post amazing notes.

## Resources

Figma Design: [here](https://www.figma.com/file/k5rXgNdQ7UPcOdyY6S2JI7/Keepable?node-id=0%3A1&mode=dev).

## User personas

There's only one type of user for Keepable application, this will be referred to as "user"

## Stories:

## V1:

## User can see a message when there are no notes

As a user, I can see a message when no notes have been added yet.

-Given that I am on the main view
And no notes have been added yet
Then I see an empty message.

## User can see a notes form

As a user, I can see a form, so I can start adding notes.

-Given that I am on the main view
Then I see a form for notes
And I can see a color palette icon and a keep it button.

## User can add notes

As a user, I want to be able to add notes, so that I can take into account my activities or duties.

-Given that I am on the main view
Then I can see a form for notes with title and content field.

-When a click the "Keep it" button
Then I see a new note created underneath.

## User can include custom color while creating a note

As a user, I want to be able to set a specific color to my note.

-Given that I am on the main view
And I am using the note creation form.

-When I click the color palette icon
Then I see a palette of available colors ready to be selected.

-When I click on a color, the palette closes up, the note changes its color
And I can continue with the creation of the note.

## User sees a list of added notes

As a user, I can see a list of my notes, so that I can check them at any time.

-Given that I am on the main view
Then I see a list of my notes sorted by creation date (newest first).

## User can change the color of a note

As a user, I can change the color of any of the created notes so that I can keep them organized.

-Given that I am on the main view
Then I see a list of my notes.

-When I click the color palette icon of any note
Then I see a palette of available colors ready to be selected.

-When I click on a color, the palette closes up and the note changes its color.

## User can delete a note

As a user, I want to be able to delete notes that are nonrelevant for me anymore.

-Given that I am on the main view
Then I see previously created notes.

-When I click the trash icon\ Then the current note will disappear from the notes view and be included in the trash view.

## User can see the sidebar

As a user, I can see a sidebar with two links, so that I can explore two views depending on my needs.

-Given that I am on the main view
Then I see a link to notes -main- view and a link to trash view.

## User can see deleted notes in trash view

As a user, I can see my deleted notes.

-Given that I am on the main view
When I click the "Trash" link
Then I see a list of deleted notes.

## User can permanently delete notes

As a user, I want to be able to delete permanently a deleted note, so that I cannot see them anymore.

-Given that I am on the trash view
Then I see a list of deleted notes.

-When I click the trash icon button
Then its parent note will be deleted permanently.

## User can recover deleted notes

As a user, I want to be able to recover a deleted note.

-Given that I am on the trash view
Then I see a list of deleted notes.

-When I click the arrow up icon button
Then current note will be recovered and shown in the notes view again.

## License

[MIT](/LICENCE)
