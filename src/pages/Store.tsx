import {Col, Form, Row} from "react-bootstrap";import storeItems from '../data/items.json'import {StoreItem} from "../components/StoreItem.tsx";import {useEffect} from "react";import {useShoppingCart} from "../context/ShoppingCartContext.tsx";export function Store() {    // const [searchText, setSearchText] = useState('')const {searchTerm, setSearchTerm, filteredItems, setFilteredItems } = useShoppingCart()    useEffect(()=> {        const lowerCaseSearchTerm = searchTerm.toLowerCase();const filtered = storeItems.filter( item => item.name.toLowerCase().includes(lowerCaseSearchTerm))   setSearchTerm(searchTerm);setFilteredItems(filteredItems)    }, [searchTerm])    return (        <>            <h1>I'm a store! Buy smth</h1>            <Form className="d-flex m-3">                <Form.Control                    placeholder="Search for items"                    type="text"                    value={searchTerm}                    onChange={(e) => setSearchTerm(e.target.value)}                />            </Form>            <Row xs={1} md={2} lg={3}>                {filteredItems.map(item =>                    <Col key={item.id}>                        <StoreItem {...item}/>                    </Col>)}            </Row>        </>    )}