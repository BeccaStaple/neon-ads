import React from "react"
import { Grid, Image } from 'semantic-ui-react'

export default function Pics() {
    return (
        <Grid style={{
            margin: 0,
            padding: 0
        }}>
            <Grid.Row columns={3} >
                <Grid.Column>
                
                    <Image src='https://thinkmarketingmagazine.com/wp-content/uploads/2013/09/5-Ideas-for-the-Future-of-Advertising.jpg' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://blog.hubspot.com/hubfs/advertising%20planning%20template.jpg' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://media.kasperskydaily.com/wp-content/uploads/sites/92/2016/09/06021627/internet-ads-featured.jpg' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}