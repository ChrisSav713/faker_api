const { faker } = require('@faker-js/faker');
const express = require("express")
const router = express.Router()

const createProduct = () => {
    const fakerData = {
        color: faker.color.human(),
        department: faker.commerce.department(),
        price: "$" + faker.commerce.price(),
        product: faker.commerce.product(),
        productAdjective: faker.commerce.productAdjective(),
        productDescription: faker.commerce.productDescription(),
        productMaterial: faker.commerce.productMaterial(),
        productName: faker.commerce.productName()
    };
    return fakerData;
};

const createCompany = () => {
    const fakerData = {
        bs: faker.company.bs(),
        bsAdjective: faker.company.bsAdjective(),
        bsBuzz: faker.company.bsBuzz(),
        bsNoun: faker.company.bsNoun(),
        catchPhrase: faker.company.catchPhrase(),
        catchPhraseAdjective: faker.company.catchPhraseAdjective(),
        catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
        catchPhraseNoun: faker.company.catchPhraseNoun(),
        companyName: faker.company.name(),
        companySuffix: faker.company.companySuffix(),
        name: faker.company.name(),
        suffixes: faker.company.suffixes()
    }
    return fakerData;
}

const createUser = () => {
    const fakerData = {
        firstName: faker.name.firstName(),
        fullName: faker.name.fullName(),
        gender: faker.name.gender(),
        jobArea: faker.name.jobArea(),
        jobDescriptor: faker.name.jobDescriptor(),
        jobTitle: faker.name.jobTitle(),
        jobType: faker.name.jobType(),
        lastName: faker.name.lastName(),
        middleName: faker.name.middleName(),
        prefix: faker.name.prefix(),
        sex: faker.name.sex(),
        sexType: faker.name.sexType(),
        suffix: faker.name.suffix()
    }
    return fakerData;
}

router.get('/users/new', (req, res, next) => {
    const userData = createUser();
    res.render("user.ejs", { userData: userData })
})

router.get('/companies/new', (req, res, next) => {
    const companyData = createCompany();
    res.render("company.ejs", { companyData: companyData })
})

router.get('/products/new', (req, res, next) => {
    const productData = createProduct();
    res.render("product.ejs", { productData: productData })
})

router.get('/user/company', (req, res, next) => {
    const userData = createUser();
    const companyData = createCompany();
    res.render("both.ejs", { companyData: companyData, userData: userData })
})

module.exports = router