import React from 'react'
import { Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { Button, Icon} from 'semantic-ui-react'

export default function EventListItem({event}) {
  return (
    
          <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size='tiny' circular 
                            src={event.hostPhotoURL}/>
                            <Item.Content>
                                <Item.Header content={event.title}/>
                                <Item.Description>
                                    Hosted by {event.hostedBy}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>

                <Segment>
                    <span>
                        <Icon name="clock"/> {event.date}
                        <Icon name="marker"/> {event.venue}
                    </span>

                    <Segment secondary>
                        <List horizontal>
                            {event.attendees.map(attendee=>(
                                 <EventListAttendee key={attendee.id} attendee={attendee}/>
                            ))}
                           
                          
                        </List>
                    </Segment>

                    <Segment clearing>
                        <div>{EventSource.description}</div>
                        <Button color='teal' floated='right' content='view'/>
                    </Segment>
                </Segment>
          </Segment.Group>
    
  )
}
