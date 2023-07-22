'use strict';
const fs = require('fs');

const biome_definition_list = require('./bedrock/biome_definition_list.json').nbt;
const available_entity_identifiers = require('./bedrock/available_entity_identifiers.json').nbt;
const creative_content = require('./bedrock/creative_content.json').items;
const update_attributes = require('./bedrock/update_attributes.json').attributes;

module.exports = {
    biome_definition_list,
    available_entity_identifiers,
    creative_content,
    update_attributes
};
