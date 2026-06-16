import dynamic from "next/dynamic";

const ManageItemsClient = dynamic(
    () => import("@/components/items/ManageItemsClient"),
    { ssr: false },
);

export default function ManageItemsPage() {
    return <ManageItemsClient />;
}
