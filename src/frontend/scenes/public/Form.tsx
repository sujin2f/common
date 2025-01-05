import React from 'react'

import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'
import { Button } from 'src/common/components/forms/Button'
import { CloseButton } from 'src/common/components/forms/CloseButton'
import { Input } from 'src/common/components/forms/Input'
import { Select } from 'src/common/components/forms/Select'

const Form = () => {
    return (
        <main>
            <ArticleHeader
                title="Form"
                description="Basic style of form elements"
            />
            <Row dom="article">
                <Column small={12}>
                    <form>
                        <h2>Input with row and column</h2>
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

                        <h2>Textarea</h2>
                        <Input
                            type="textarea"
                            label="What books did you read over summer break?"
                            placeholder="What is a book?"
                        />

                        <h2>Select</h2>
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

                        <h2>Fieldset and Legend</h2>
                        <Row fullWidth={true}>
                            <Column small={6}>
                                <h3>Radio</h3>
                                <fieldset>
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
                                </fieldset>
                            </Column>
                            <Column small={6}>
                                <h3>Checkbox</h3>
                                <fieldset>
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
                                </fieldset>
                            </Column>
                        </Row>

                        <h2>Password</h2>
                        <Input
                            type="password"
                            label="Password"
                            helpText="Your password must have at least 10 characters, a number, and an Emoji."
                        />

                        <h3>Buttons</h3>
                        <Button title="Button" />

                        <h2>Hollow</h2>
                        <Button title="Button" hollow />

                        <h2>Vanilla</h2>
                        <Button title="Button" vanilla />

                        <h2>Close Button</h2>
                        <CloseButton />
                    </form>
                </Column>
            </Row>
        </main>
    )
}
export default Form
