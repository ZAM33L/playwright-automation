import {test,expect} from '@playwright/test'

test('API GET request',async({request})=>{
    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain('Janet')
    console.log(await response.json())
})

test('API POST request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: "Jameel",
            job: "Teacher"
        },
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });

    expect(response.status()).toBe(201);

    const json = await response.json();
    expect(json.name).toBe('Jameel');
    console.log(json);
});

test('API PUT request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            name: "Jameel",
            job: "Teacher"
        },
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });

    expect(response.status()).toBe(200);

    const json = await response.json();
    expect(json.name).toBe('Jameel');
    console.log(json);
});

test('API DELETE request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2', {
        headers: { 'x-api-key': 'reqres-free-v1' }
    });
    expect(response.status()).toBe(204);
});



