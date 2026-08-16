import { mergeTests } from "@playwright/test";
import{test as pageObjectFixture} from '../fixtures/pageObjectFixture'
import{test as dataFixture} from '../fixtures/dataFixture'

export const test = mergeTests(pageObjectFixture,dataFixture)

export {expect} from '@playwright/test'