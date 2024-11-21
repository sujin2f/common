import React, { Fragment } from 'react'

import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'
import { Button } from 'src/common/components/forms/Button'
import { Input } from 'src/common/components/forms/Input'
import { Select } from 'src/common/components/forms/Select'

const Form = (): JSX.Element => {
    return (
        <Fragment>
            <ArticleHeader title="Form" description="description" />
            <Row dom="main">
                <Column dom="article" small={12} medium={8} mediumOffset={2}>
                    <form>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="medium-6 cell">
                                    <Input
                                        type="text"
                                        placeholder=".medium-6.cell"
                                        label="Input Label"
                                    />
                                </div>
                                <div className="medium-6 cell">
                                    <Input
                                        type="text"
                                        placeholder=".medium-6.cell"
                                        label="Input Label"
                                    />
                                </div>
                            </div>
                        </div>
                        <label>
                            What books did you read over summer break?
                            <textarea placeholder="None"></textarea>
                        </label>
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
                        <div className="grid-x grid-padding-x">
                            <fieldset className="large-5 cell">
                                <legend>Choose Your Favorite</legend>
                                <Input
                                    type="radio"
                                    name="pokemon"
                                    value="Red"
                                    id="pokemonRed"
                                    required
                                />
                                <label htmlFor="pokemonRed">Red</label>
                                <Input
                                    type="radio"
                                    name="pokemon"
                                    value="Blue"
                                    id="pokemonBlue"
                                />
                                <label htmlFor="pokemonBlue">Blue</label>
                                <Input
                                    type="radio"
                                    name="pokemon"
                                    value="Yellow"
                                    id="pokemonYellow"
                                />
                                <label htmlFor="pokemonYellow">Yellow</label>
                            </fieldset>
                            <fieldset className="large-7 cell">
                                <legend>Check these out</legend>
                                <Input id="checkbox1" type="checkbox" />
                                <label htmlFor="checkbox1">Checkbox 1</label>
                                <Input id="checkbox2" type="checkbox" />
                                <label htmlFor="checkbox2">Checkbox 2</label>
                                <Input id="checkbox3" type="checkbox" />
                                <label htmlFor="checkbox3">Checkbox 3</label>
                            </fieldset>
                        </div>
                        <fieldset className="fieldset">
                            <legend>Check these out</legend>
                            <Input id="checkbox12" type="checkbox" />
                            <label htmlFor="checkbox12">Checkbox 1</label>
                            <Input id="checkbox22" type="checkbox" />
                            <label htmlFor="checkbox22">Checkbox 2</label>
                            <Input id="checkbox32" type="checkbox" />
                            <label htmlFor="checkbox32">Checkbox 3</label>
                        </fieldset>
                        <Input
                            type="password"
                            label="Password"
                            helpText="Your password must have at least 10 characters, a number, and an Emoji."
                        />

                        <div>
                            <label
                                htmlFor="exampleFileUpload"
                                className="button"
                            >
                                Upload File
                            </label>
                            <Button
                                type="file"
                                id="exampleFileUpload"
                                className="show-for-sr"
                            />
                        </div>
                        <div>
                            <Button title="button" />
                        </div>
                    </form>
                </Column>
            </Row>
        </Fragment>
    )
}
export default Form
