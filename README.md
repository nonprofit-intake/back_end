
### Persona

Supervisors at the shelter are meeting guests that they serve on the worst day of the guest's lives.  On top of becoming homeless and having nobody to stay with, the guests are required to manually fill out 20 to 30 pages of forms in order to be admitted into the shelter.  Parents must keep their children in line of sight at all times, so a new guest needs to fill out this paper work and keep track of their children at the same time.  

These paper intake packets are stored indefinitely, and need to be transported to another location for the data entry staff to get information out of them to input into the CMIS system.

Once a guest has left our shelter, their file is stored away, and is very difficult to locate again in the future if the guest comes back or if any organization comes to us seeking information about the guests.

If a guest is terminated from the program for gross violations of policies, there is no way to make sure that staff in the future will be aware of these actions should the guest attempt to stay with us again in the future.

# Features

intake system (Staff & Admin POV)
    - Register a family into our system
    - Query to find a specific guest
    - Mark guests as terminated if they violated the rules
    - Add notes to each guest
    - Verify that the guest has stayed the night
    - View the current carrying capacity of open doors

intake system (Guest POV)
    - Given an account with a predetermined password
    - Can view the current carrying capacity of Open Doors
    - The guest can clock-in for the night (Needs to be verified by staff)

intake system (Admin POV)
    - Able to authorize & crud staff members

### Endpoints ###

# Families

GET/POST /api/v1/families

CRUD /api/v1/families/:id

GET/POST /api/v1/families/:id/members

GET/POST /api/v1/families/:id/notes

CRUD /api/v1/families/:id/notes/:id

# Members

GET /api/v1/members/
    - Add filering features

CRUD /api/v1/members/:id

GET/POST /api/v1/members/notes/
CRUD /api/v1/members/notes/:id
