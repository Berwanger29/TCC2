import { Container, Scroll } from "./styles";

import { GenericHeader } from "../../components/GenericHeader"
import { TextSmall } from "../../components/Texts";

export function About() {
    return (
        <Container>
            <GenericHeader
                text="Sobre"
                style={{
                    marginBottom: 20
                }}
                backButton={true}
            />
            <Scroll>
                <TextSmall
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra diam pellentesque, euismod leo vel, dapibus urna. Ut euismod libero quis nibh iaculis hendrerit. Cras sagittis magna sed pellentesque varius. Donec imperdiet a orci nec faucibus. In mattis felis et ullamcorper fermentum. Pellentesque porttitor risus vitae ex tincidunt porttitor. Suspendisse volutpat consectetur augue ac imperdiet. Maecenas at nibh pellentesque, sodales purus quis, volutpat ante.
                In dignissim, est sit amet commodo suscipit, ligula purus euismod nunc, eu scelerisque risus sem mattis leo. Sed eleifend volutpat erat eu mollis. Duis auctor quis quam nec efficitur. Morbi ornare, ante vitae tempor auctor, felis mi finibus quam, eget vulputate dui augue at justo. Maecenas in nulla ornare, egestas diam ut, vestibulum ligula. Vivamus sodales lobortis nisl eget vulputate. Nulla sed erat tellus. Nam et purus tincidunt libero bibendum commodo vitae et ligula. Ut vitae diam tortor. Ut urna augue, accumsan in pretium sed, feugiat fringilla mauris. Proin malesuada dolor tortor, eu vestibulum arcu tincidunt ac. Ut et lacus eget augue vehicula egestas.                
                Donec dui libero, pretium vel dignissim id, efficitur non dolor. Phasellus malesuada lectus ac nisl maximus porta. Praesent facilisis risus sit amet felis euismod, in viverra metus fermentum. Proin laoreet ex vel accumsan posuere. Mauris auctor, eros eu semper viverra, elit arcu efficitur enim, rhoncus rhoncus enim nisl a sem. Duis bibendum mauris eget erat pulvinar, quis convallis turpis consequat. Cras non sapien turpis. Donec mauris nisi, accumsan bibendum ornare ac, ornare ut dolor.                
                Sed vitae vehicula risus. Nunc volutpat lectus nec tortor convallis, vel lacinia mauris fringilla. Donec pretium molestie sodales. Maecenas sit amet nulla sed neque mollis lobortis. Vestibulum tellus sapien, vestibulum sit amet gravida quis, tincidunt et erat. Maecenas laoreet commodo neque. Fusce scelerisque sit amet ex nec blandit. Nunc sit amet ex odio. Quisque pretium interdum consequat. Integer volutpat pretium arcu. Morbi eu sollicitudin lorem. Duis sed ultrices nibh, id lacinia dolor. Quisque vestibulum, mi nec varius luctus, dolor turpis aliquet nisl, a egestas velit sapien faucibus purus. In volutpat ultrices tristique. Nullam dignissim efficitur nibh ac fermentum. Maecenas egestas sapien a elementum pellentesque.
                Phasellus et convallis ante. Donec imperdiet mi eu neque porttitor, a sagittis dolor luctus. Nullam vitae massa vel justo consequat egestas sed sed urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur consequat mauris quis neque lacinia blandit. In luctus, tellus vel mollis auctor, nisl lacus pellentesque risus, non blandit tellus lorem non magna. Vivamus facilisis viverra faucibus."
                />
            </Scroll>
        </Container>
    )
}