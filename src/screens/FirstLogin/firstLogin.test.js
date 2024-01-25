import { FirstLogin } from "."

it('renders corretcly', () => {
    const tree = renderer.create(<FirstLogin />).toJson();
    expect(tree).toMatchSnapshot();
})