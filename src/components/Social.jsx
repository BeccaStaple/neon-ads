import React from "react"
import { Grid, Icon } from "semantic-ui-react"

export default function Social() {
    return (
        <Grid centered style={{
            marginTop: "10px"
        }}>
            <Grid.Row columns={1}>

                <Grid.Column centered width={1}>
                    <Icon centered style={{
                        color: "#e13af3"
                    }} name='twitter' size="huge" />
                </Grid.Column>

            </Grid.Row>

            <Grid.Row columns={1}>
                <Grid.Column width={1}>
                    <Icon style={{
                        color: "#ccff00"
                    }} name='facebook' size="huge" />
                </Grid.Column>
               

            </Grid.Row>

            <Grid.Row columns={1}>
                <Grid.Column width={1}>
                    <Icon style={{
                        color: "#20e606"
                    }} name='instagram' size="huge" />
                </Grid.Column>
               

            </Grid.Row>

            <Grid.Row columns={1}>
                <Grid.Column width={1}>
                    <Icon style={{
                        color: "#fe019a"
                    }} name='linkedin' size="huge" />
                </Grid.Column>

            </Grid.Row>


        </Grid>

    )
}