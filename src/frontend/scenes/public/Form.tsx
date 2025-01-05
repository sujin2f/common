import React, { Fragment } from 'react'

import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'
import { Button } from 'src/common/components/forms/Button'
import { CloseButton } from 'src/common/components/forms/CloseButton'
import { Input } from 'src/common/components/forms/Input'
import { Select } from 'src/common/components/forms/Select'

import Facebook from 'src/common/images/icons/facebook.svg'
import Twitter from 'src/common/images/icons/twitter.svg'
import LinkedIn from 'src/common/images/icons/linkedin.svg'

const Form = () => {
    return (
        <Fragment>
            <ArticleHeader title="Form" description="description" />
            <Row dom="main">
                <Column dom="article" small={12} medium={8} mediumOffset={2}>
                    <form>
                        <Row fullWidth={true}>
                            <Column small={6}>
                                <Input
                                    type="text"
                                    placeholder="PlaceHolder"
                                    label="Input Label"
                                />
                            </Column>
                            <Column small={6}>
                                <Input
                                    type="text"
                                    placeholder="PlaceHolder"
                                    label="Input Label"
                                />
                            </Column>
                            <Column small={6}>
                                <Input
                                    type="text"
                                    placeholder="PlaceHolder"
                                    label="Input Label"
                                    defaultValue="Default Value"
                                    helpText="Help Text"
                                    required={true}
                                    errorMessage="This is error message!"
                                />
                            </Column>
                            <Column small={6}>
                                <Input
                                    type="text"
                                    placeholder="PlaceHolder"
                                    label="Input Label"
                                />
                            </Column>
                        </Row>
                        <Input
                            type="textarea"
                            label="What books did you read over summer break?"
                            placeholder="What is a book?"
                        />
                        <Select
                            label="Select Menu"
                            options={{
                                husker: 'Husker',
                                starbuck: 'Starbuck',
                                hotdog: 'Hot Dog',
                                apollo: 'Apollo',
                            }}
                        />
                        <Select
                            label="Multiple Select Menu"
                            options={{
                                husker: 'Husker',
                                starbuck: 'Starbuck',
                                hotdog: 'Hot Dog',
                                apollo: 'Apollo',
                            }}
                            multiple={true}
                        />
                        <Row fullWidth={true}>
                            <Column dom="fieldset" small={7}>
                                <legend>Choose Your Favorite</legend>
                                <Input
                                    type="radio"
                                    name="pokemon"
                                    value="Red"
                                    label="Red"
                                />
                                <Input
                                    type="radio"
                                    name="pokemon"
                                    value="Blue"
                                    label="Blue"
                                />
                                <Input
                                    type="radio"
                                    name="pokemon"
                                    value="Yellow"
                                    label="Yellow"
                                />
                            </Column>
                            <Column dom="fieldset" small={5}>
                                <legend>Check these out</legend>
                                <Input
                                    type="checkbox"
                                    label="Checkbox 1"
                                    value="1"
                                />
                                <Input
                                    type="checkbox"
                                    label="Checkbox 2"
                                    value="2"
                                />
                                <Input
                                    type="checkbox"
                                    label="Checkbox 3"
                                    value="3"
                                />
                            </Column>
                        </Row>
                        <Input
                            type="password"
                            label="Password"
                            helpText="Your password must have at least 10 characters, a number, and an Emoji."
                        />
                        <div>
                            <CloseButton />
                        </div>
                        <div>
                            <Button type="file" title="Upload File" />
                        </div>
                        <div>
                            <Button title="Button" />
                        </div>
                        <div>
                            <Button title="Button" hollow />
                        </div>
                        <div>
                            <Button icon>
                                <Facebook />
                            </Button>
                            <Button icon>
                                <Twitter />
                            </Button>
                            <Button icon>
                                <LinkedIn />
                            </Button>
                        </div>
                    </form>
                </Column>
            </Row>
        </Fragment>
    )
}
export default Form
